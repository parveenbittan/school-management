export class ExamMasterModel {
    examId: number;
      examName: string;
      examCode: string;
      isActive:boolean;
    
      constructor(examId: number, examName: string, examCode: string,isActive:boolean) {
        this.examId = examId;
        this.examName = examName;
        this.examCode = examCode;
        this.isActive = isActive;
      }
     
    }