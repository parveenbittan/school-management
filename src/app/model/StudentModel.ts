export class StudentModel {
      studentId: number;
      classId : number;
      className :string;
      sessionId :number;
      sessionName:string;
      name: string;
      fatherName: string;
      motherName : string;
      isActive:boolean;
      contact1: string;
      contact2: string;
      currentAddress: string;
      permanentAddress: string;
      adhar :string;
      bloodGroup:string;
      dob :string
    
      constructor(studentId: number,classId: number,sessionId: number, className: string, sessionName: string,isActive:boolean,
        name: string,fatherName: string,motherName: string,contact1: string,contact2: string,currentAddress: string,permanentAddress: string,
        adhar: string,bloodGroup:string,dob:string) {
            this.studentId=studentId;
            this.classId =classId;
            this.className =className;
            this.sessionId =sessionId;
            this.sessionName=sessionName;
            this.name=name;
            this.fatherName=fatherName;
            this.motherName =motherName;
            this. isActive=isActive;
            this. contact1=contact1;
            this.contact2=contact2;
            this.currentAddress=currentAddress;
            this.permanentAddress=permanentAddress;
            this.adhar =adhar;
            this. bloodGroup=bloodGroup;
            this. dob=dob;
      }
     
    }