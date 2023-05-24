import axios from "axios";
import { a as loggedInUser, l as latestTrail } from "./stores.js";
const trailService = {
  baseUrl: "https://placemark-hapi.onrender.com",
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        loggedInUser.set({
          email,
          token: response.data.token,
          _id: response.data.id
        });
        localStorage.trail = JSON.stringify({ email, token: response.data.token });
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
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName,
        lastName,
        email,
        password
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
  async update(trail) {
    try {
      const response = await axios.post(this.baseUrl + "/api/placemarks/" + trail.placemark._id + "/trails", trail);
      latestTrail.set(trail);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  },
  async getPlacemarks() {
    try {
      const response = await axios.get(this.baseUrl + "/api/placemarks");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getTrails() {
    try {
      const response = await axios.get(this.baseUrl + "/api/trails");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getTrailsByPlacemark(placemark) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/placemarks/${placemark._id}/trails`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getTrailsByPlacemarks() {
    const trailsByPlacemark = [];
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
export {
  trailService as t
};
