import { inject, injectable } from "tsyringe";

import { IGroupCharacter } from "../models/eft/match/IGroupCharacter";
import { IMatchGroupCurrentResponse } from "../models/eft/match/IMatchGroupCurrentResponse";
import { IMatchGroupInviteSendRequest } from "../models/eft/match/IMatchGroupInviteSendRequest";
import { IMatchGroupPlayerRemoveRequest } from "../models/eft/match/IMatchGroupPlayerRemoveRequest";
import { IMatchGroupStartGameRequest } from "../models/eft/match/IMatchGroupStartGameRequest";
import { IMatchGroupStatusRequest } from "../models/eft/match/IMatchGroupStatusRequest";
import { IMatchGroupStatusResponse } from "../models/eft/match/IMatchGroupStatusResponse";
import { IMatchGroupTransferRequest } from "../models/eft/match/IMatchGroupTransferRequest";
import { IProfileStatusRequest } from "../models/eft/match/IProfileStatusRequest";
import { IProfileStatusResponse } from "../models/eft/match/IProfileStatusResponse";
import { IRequestIdRequest } from "../models/eft/match/IRequestIdRequest";
import { FikaMatchService } from "../services/FikaMatchService";

@injectable()
export class FikaMatchController {
    constructor(@inject("FikaMatchService") protected fikaMatchService: FikaMatchService) {
        // empty
    }

    /** Handle /client/match/exit */
    public handleMatchExit(sessionID: string): void {
        // code here
    }

    /** Handle /client/match/group/current */
    public handleMatchGroupCurrent(sessionID: string): IMatchGroupCurrentResponse {
        return {
            squad: [],
        };
    }

    /** Handle /client/match/group/delete */
    public handleMatchGroupDelete(sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/exit_from_menu */
    public handleMatchGroupExitFromMenu(sessionID: string): void {
        // code here
    }

    /** Handle /client/match/group/invite/accept */
    public handleMatchGroupInviteAccept(info: IRequestIdRequest, sessionID: string): IGroupCharacter[] {
        return [];
    }

    /** Handle /client/match/group/invite/cancel */
    public handleMatchGroupInviteCancel(info: IRequestIdRequest, sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/invite/cancel-all */
    public handleMatchGroupInviteCancelAll(sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/invite/decline */
    public handleMatchGroupInviteDecline(info: IRequestIdRequest, sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/invite/send */
    public handleMatchGroupInviteSend(info: IMatchGroupInviteSendRequest, sessionID: string): string {
        // TODO: proper groupId
        return "000000000000000000000000";
    }

    /** Handle /client/match/group/leave */
    public handleMatchGroupLeave(sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/looking/start */
    public handleMatchGroupLookingStart(sessionID: string): void {
        // code here
    }

    /** Handle /client/match/group/looking/stop */
    public handleMatchGroupLookingStop(sessionID: string): void {
        // code here
    }

    /** Handle /client/match/group/player/remove */
    public handleMatchGroupPlayerRemove(info: IMatchGroupPlayerRemoveRequest, sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/start_game */
    public handleMatchGroupStartGame(info: IMatchGroupStartGameRequest, sessionID: string): IProfileStatusResponse {
        // NOTE: not entirely clear when `ip`, `port`, `sid`, `shortId` are set
        return {
            maxPveCountExceeded: false,
            profiles: [
                // of all active characters in the group
            ],
        };
    }

    /** Handle /client/match/group/status */
    public handleMatchGroupStatus(info: IMatchGroupStatusRequest, sessionID: string): IMatchGroupStatusResponse {
        return {
            players: [],
            maxPveCountExceeded: false,
        };
    }

    /** Handle /client/match/group/transfer */
    public handleMatchGroupTransfer(info: IMatchGroupTransferRequest, sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/raid/not-ready */
    public handleMatchGroupRaidNotReady(sessionID: string): boolean {
        return true;
    }

    /** Handle /client/match/group/raid/ready */
    public handleMatchGroupRaidReady(sessionID: string): boolean {
        return true;
    }

    /** Handle /client/profile/status */
    public handleProfileStatus(info: IProfileStatusRequest, sessionID: string): IProfileStatusResponse {
        return {
            maxPveCountExceeded: false,
            profiles: [
                // requesting player's
                // - scav
                // - pmc
            ],
        };
    }
}
