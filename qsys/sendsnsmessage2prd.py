import boto3
import ibm_db
import ibm_db_dbi as db2

# NRS Outbound Target ARN
prd_target_arn = "arn:aws:sns:us-east-1:783665423709:sns-nrs-prd-outbound-event.fifo"


# Create an SNS client-keys for 611/Mike_Corbo
client = boto3.client(
    "sns",
    aws_access_key_id="AKIA3M5QZMVORA6DLMNB",
    aws_secret_access_key="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",
    region_name="us-east-1")

# Create a connection to the 400 database
conn = db2.connect()
c1 = conn.cursor()

c1.execute("select message_data from table(qsys2.receive_data_queue(DATA_QUEUE => 'PINCAPIOUT',DATA_QUEUE_LIBRARY => 'PINC_API', REMOVE => 'YES'))")
# fetch a data queue entry
row = c1.fetchone()
if row is not None:
    alldata = row[0]
    api = alldata[:25].replace('_','').rstrip()
    x = alldata.rfind("}}}")+3
    message = alldata[25:x]
    result = client.publish(
        Message = message,
        MessageGroupId=api,
        TargetArn = prd_target_arn
        )
# this will be copied to a file in /pinc with api name     
    print('Target arn: %s' % prd_target_arn)
    print('MessageGroupId: %s' % api)
    print('Message: %s' % message)
    print('Result: %s' % result)  
c1.close()
conn.close()




