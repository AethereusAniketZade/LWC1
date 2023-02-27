global class batchclass implements Database.Batchable<sObject>{
	public String query;
	global batchclass(String query){
		this.query=query;
	}
	global Database.QueryLocator start(Database.BatchableContext BC){
		// collect the batches of records or objects to be passed to execute
		return Database.getQueryLocator(query);
	}
	global void execute(Database.BatchableContext BC, List<sObject> scope){
		// process each batch of records
	}
	global void finish(Database.BatchableContext BC){
		// execute any post-processing operations
	}
}