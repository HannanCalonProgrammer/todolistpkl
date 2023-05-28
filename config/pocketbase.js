import PocketBase from "pocketbase";

const pb = new PocketBase("https://daily-app-db.pockethost.io");
pb.autoCancellation(false);

export default pb;
