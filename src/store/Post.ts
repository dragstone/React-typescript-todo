import { action, observable, makeObservable, runInAction } from "mobx";
import axios from "axios";
import { postModel } from "../models/postModel";

export default class Post {
  loader: boolean = false;
  postList: postModel[] = [];
  error: string = "";

  constructor() {
    makeObservable(this, {
      loader: observable,
      postList: observable,
      error: observable,
    });
  }

  userLoadData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      runInAction(() => {
        this.postList = response.data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = "error";
      });
    }
  };
}
