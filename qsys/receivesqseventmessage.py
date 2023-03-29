import boto3
import json

# Create SQS client (key for Mike_Corbo)
sqs = boto3.client('sqs',
    aws_access_key_id="AKIA3M5QZMVORA6DLMNB",
    aws_secret_access_key="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",
    region_name="us-east-1")


prd_queue_url = 'https://sqs.us-east-1.amazonaws.com/783665423709/sqs-nrs-prd-inbound-event.fifo'

# Receive message from SQS queue
response = sqs.receive_message(
    QueueUrl=queue_url,
    MaxNumberOfMessages=1,
    VisibilityTimeout=5,
    WaitTimeSeconds=0
)
try:
    message = response['Messages'][0]
except KeyError:
    print('{"event":"No Message Received"}')
else:
    parsed = json.loads(message['Body'])
    print(parsed['Message'])
    
    receipt_handle = message['ReceiptHandle']

# Delete received message from queue
    try:
        delete_response = sqs.delete_message(
            QueueUrl=queue_url,
            ReceiptHandle=receipt_handle
    )
    except:
        print('{"event":"Delete Message Failed"}')
    else:
        print('{"event":"Message Deleted"}')