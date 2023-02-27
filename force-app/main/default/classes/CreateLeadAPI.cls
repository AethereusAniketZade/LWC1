public class CreateLeadAPI {
 

@AuraEnabled(cacheable=true)    
public static List<Account> accConList(){
    List<Account> acConList = [Select Id , Name ,(Select Id, FirstName, LastName , Phone from contacts)c from Account order by Createddate LIMIT 5 ];
    
    if(!acConList.isEmpty()){
        return acConList;
    }
    return null;
}
}