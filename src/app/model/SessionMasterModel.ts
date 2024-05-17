export class SessionMasterModel {
    sessionId: number;
      sessionName: string;
      sessionCode: string;
      isActive:boolean;
    
      constructor(sessionId: number, sessionName: string, sessionCode: string,isActive:boolean) {
        this.sessionId = sessionId;
        this.sessionName = sessionName;
        this.sessionCode = sessionCode;
        this.isActive = isActive;
      }
     
    }