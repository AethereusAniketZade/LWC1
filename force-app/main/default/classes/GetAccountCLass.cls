public with sharing class GetAccountCLass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getacc(){
        try {
            List<Account> accList = [Select Id , Name , Type from Account where Type != Null Limit 5];
            if(!accList.isEmpty()){
                return accList;
            }
            return null;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
  
}