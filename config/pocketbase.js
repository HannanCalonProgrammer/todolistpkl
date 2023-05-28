import PocketBase from "pocketbase";

const pb = new PocketBase("https://daily-app-pocketbase.up.railway.app");
pb.autoCancellation(false);

export default pb;
