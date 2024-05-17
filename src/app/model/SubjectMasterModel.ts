export class SubjectMasterModel {
    subjectId: number;
      subjectName: string;
      subjectCode: string;
      isActive:boolean;
    
      constructor(subjectId: number, subjectName: string, subjectCode: string,isActive:boolean) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.subjectCode = subjectCode;
        this.isActive = isActive;
      }
     
    }