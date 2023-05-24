import axios from "axios";
import { latestTrail, loggedInUser } from "../stores";
import type { Placemark, PlacemarkTrails, Trail } from "./trail-types";
export const trailService = {
    baseUrl: "https://placemark-hapi.onrender.com",

    async login(email: string, password: string): Promise<boolean> {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                loggedInUser.set({
                    email: email,
                    token: response.data.token,
                    _id: response.data.id
                });
                localStorage.trail = JSON.stringify({ email: email, token: response.data.token });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        loggedInUser.set({
            email: "",
            token: "",
            _id: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("trail");
    },

    async signup(firstName: string, lastName: string, email: string, password: string): Promise<boolean> {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    reload() {
        if (!axios.defaults.headers.common["Authorization"]) {
            const trailCredentials = localStorage.trail;
            if (trailCredentials) {
                const savedUser = JSON.parse(trailCredentials);
                loggedInUser.set({
                    email: savedUser.email,
                    token: savedUser.token,
                    _id: savedUser._id
                });
                axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
            }
        }
    },



    async update(trail: Trail): Promise<boolean> {
        try {
            const response = await axios.post(this.baseUrl + "/api/placemarks/" + trail.placemark._id + "/trails", trail);
            latestTrail.set(trail);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

    async getPlacemarks(): Promise<Placemark[]> {
        try {
            const response = await axios.get(this.baseUrl + "/api/placemarks");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getTrails(): Promise<Trail[]> {
        try {
            const response = await axios.get(this.baseUrl + "/api/trails");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getTrailsByPlacemark(placemark: Placemark): Promise<Trail[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/placemarks/${placemark._id}/trails`);
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getTrailsByPlacemarks(): Promise<PlacemarkTrails[]> {
        const trailsByPlacemark: PlacemarkTrails[] = [];
        const placemarks = await trailService.getPlacemarks();
        for (let i = 0; i < placemarks.length; i++) {
            const trails = {
                placemark: placemarks[i],
                trails: await trailService.getTrailsByPlacemark(placemarks[i])
            };
            trailsByPlacemark.push(trails);
        }
        return trailsByPlacemark;
    }
};
