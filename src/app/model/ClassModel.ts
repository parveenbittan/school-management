export class ClassModel {
  classId: number;
    className: string;
    classDesc: string;
    isActive:boolean;
  
    constructor(classId: number, className: string, classDesc: string,isActive:boolean) {
      this.classId = classId;
      this.className = className;
      this.classDesc = classDesc;
      this.isActive = isActive;
    }
   
  }