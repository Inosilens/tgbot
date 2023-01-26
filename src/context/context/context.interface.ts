import {Context} from "telegraf";

export interface SessionData {
    andruLove: boolean;
}
export interface IBotContext extends Context {
    session:SessionData;

}