public class ShowObjectName {
    
    @AuraEnabled(cacheable=true)
    public static List<String> showObject(String objectNme){
        System.debug('objectNme--'+objectNme);
        if(objectNme !=null ){
            System.debug('Inside Not Null');
             List<Schema.SObjectType> gd = Schema.getGlobalDescribe().Values(); 
        Map<String,String> objName = new Map<String,String>();
        for(Schema.SObjectType f : gd)
        {
            if(f.getDescribe().getLabel() == 'Account'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
            if(f.getDescribe().getLabel() == 'Contact'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
         /*   if(f.getDescribe().getLabel() == 'Task'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }*/
             if(f.getDescribe().getLabel() == 'Lead'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
              if(f.getDescribe().getLabel() == objectNme){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
              

        }
        System.debug('Object Names'+objName);
        return objName.values();
        }
        else {
            System.debug('Inside  Null');
             List<Schema.SObjectType> gd = Schema.getGlobalDescribe().Values(); 
        Map<String,String> objName = new Map<String,String>();
        for(Schema.SObjectType f : gd)
        {
            if(f.getDescribe().getLabel() == 'Account'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
            if(f.getDescribe().getLabel() == 'Contact'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
             /*   if(f.getDescribe().getLabel() == 'Task'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }*/
             if(f.getDescribe().getLabel() == 'Lead'){
                  objName.put(f.getDescribe().getLabel(),f.getDescribe().getName());
            }
        }
        System.debug('Object Names'+objName);
        return objName.values();
        }
            
    }
    
      @AuraEnabled(cacheable=true)
    public static List<Sobject> showRecord(String obj){
        if(obj != null){
            String str = obj;
        String strQuery = 'SELECT Id, Name FROM '+str ;
        system.debug(Database.query(strQuery));
        return (Database.query(strQuery));
        
        }
        return null;
       
        
    }
    
}