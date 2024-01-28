<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Amazon all</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>84aa7cc6-991f-4c5b-b680-2d0c2e2e93a4</testSuiteGuid>
   <testCaseLink>
      <guid>34df5949-8d91-4099-b5e8-477c0664e53b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/TC_Amazon_Login_01</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>db9a2ab8-8540-4d7b-b1e5-95c50435817b</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon deals</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>746a0bd1-e1e3-4c9e-aa08-ac1c5a5c5260</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon Login</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>afc51d52-0241-4210-a23d-a5028ee33046</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon logout</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>268f1a09-4a93-4377-9325-7b1b637e2d36</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon Search</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>7a51168c-d6eb-415c-8778-ed07a927901e</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon wish</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>4b927485-cf15-472e-a110-a3525e73e2d1</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon_Zip</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>db9a2ab8-8540-4d7b-b1e5-95c50435817b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>c87efbff-53c1-4247-9e24-6510753ac66b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>db9a2ab8-8540-4d7b-b1e5-95c50435817b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>ad4de220-c4c8-4781-b1a7-49eeaa658769</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2290da4a-767c-4269-9bcb-a061273e2dd4</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/TC_Amazon_Search_003</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>cb871a4d-ae19-4d2a-aefc-ebb33fb14055</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon Search</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>cb871a4d-ae19-4d2a-aefc-ebb33fb14055</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>items</value>
         <variableId>4a056e90-bb6d-4780-b57d-4c50532aad1a</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>62cbcd9b-1df2-4cfe-969e-39280a35d94e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/TC_Amazon_TodaysDeals_004</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>c0e1eee8-acc9-4cd5-a2fa-dcb156be2b03</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon deals</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>c0e1eee8-acc9-4cd5-a2fa-dcb156be2b03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>052e77e7-7e9e-40b7-9f91-56cd52689f48</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c0e1eee8-acc9-4cd5-a2fa-dcb156be2b03</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>a79b971d-672d-4356-af33-510da47f2b26</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>7cd86ef9-7004-4950-9d2c-71308db9c45c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/Tc_Amazon_Wish_05</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>54de9642-7821-482e-8c8f-794ac2e7f43e</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon wish</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>54de9642-7821-482e-8c8f-794ac2e7f43e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>item</value>
         <variableId>1d96b455-a958-4b26-8503-4cc5fdd1fb31</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>c2914ac4-a1b3-4238-99d3-945186e34b3f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/TC_Amazon_Zip_06</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>26d9532d-8742-4786-8b79-d646981de73a</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon deals</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>94956101-b181-4fcb-915a-8dda4385d124</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon Login</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>ea22ee99-e37f-43bb-9d7a-20450069df39</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon logout</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>27e05ca2-4ec9-4e2c-b994-eecf2bdd9b3f</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon Search</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>a9c5dbad-3a51-4293-bd6b-03534d24690e</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon wish</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>73b6440e-83df-426b-85fe-03de8973889d</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon_Zip</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>73b6440e-83df-426b-85fe-03de8973889d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>zipcode</value>
         <variableId>403725fd-908d-4b51-8986-5959377e9e8b</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
