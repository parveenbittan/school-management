export class PostMasterModel {
    postId: number;
      postName: string;
      postCode: string;
      isActive:boolean;
      salary: string;
      pf: string;
    
      constructor(postId: number, postName: string, postCode: string,isActive:boolean,salary: string,pf: string) {
        this.postId = postId;
        this.postName = postName;
        this.postCode = postCode;
        this.isActive = isActive;
        this.salary = salary;
        this.pf = pf;
      }
     
    }