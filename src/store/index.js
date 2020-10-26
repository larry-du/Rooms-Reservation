import Vue from "vue";
import Vuex from "vuex";
import API from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allRooms: [],
    room: [],
    booking: [],
    receiveState: "",
    isLoading: false
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getAllRooms(state) {
      return state.allRooms;
    },
    getRoom(state) {
      return state.room;
    },
    getBookingDay(state) {
      return state.booking.map(bookingData => new Date(bookingData.date));
    },
    getReceiveState(state) {
      return state.receiveState;
    }
  },
  mutations: {
    bookingResult(state, result) {
      state.receiveState = result;
    },
    getAllRoomsData(state, allRooms) {
      state.allRooms = allRooms;
    },
    getRoomData(state, roomData) {
      state.room = roomData.room;
      state.booking = roomData.booking;
    },
    resetBookingResult(state) {
      state.receiveState = "";
    },
    changeLoadingState(state, loadingState) {
      state.isLoading = loadingState;
    }
  },
  actions: {
    async getAllRoomsApi({ commit }) {
      try {
        const response = await API.get("/rooms");
        commit("getAllRoomsData", response.data.items);
      } catch (error) {
        console.log(error);
      }
    },
    async getRoomData({ commit }, roomID) {
      try {
        const response = await API.get(`/room/${roomID}`);
        commit("getRoomData", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createBooking({ commit, dispatch }, { bookingData, roomID }) {
      commit("changeLoadingState", true);
      try {
        await API.post(`/room/${roomID}`, bookingData);
        commit("bookingResult", "success");
        commit("changeLoadingState", false);
        dispatch("getRoomData", roomID);
      } catch (error) {
        commit("changeLoadingState", false);
        commit("bookingResult", "fail");
        console.log(error);
      }
    }
  },
  modules: {}
});
