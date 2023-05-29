
''**********************************************************************
'FunctionName : Legal Order
'Author : Syed
'Created Date : 10/May/2022
'Purpose : This scripts is to test "Add another Agent to the Legal Order".
'Prerequisites : Run an SQL query for the Stakeholder who is a PEPP Member with Active Status.
'Change history: 
'**********************************************************************


'Call launchPenfax5Test
SystemUtil.Run "chrome.exe", "http://testadf2.peba.gov.sk.ca:7001/Penfax5/login.html"

'Call Penfax5Test(Username,Password)
browser("name:=Login").Page("title:=Login").webedit("name:=j_username").Set "ssyed"
browser("name:=Login").Page("title:=Login").webedit("name:=j_password").Set "Summer2022!"
Browser("name:=Login").HIGHLIGHT
'Browser("name:=Login").CaptureBitmap "C:\UFT_WorkSpace\Screens\test1.png"
browser("name:=Login").Page("title:=Login").Image("name:=SignIn").Click
If browser("name:=Penfax 5").Page("title:=Penfax 5").WebElement("xpath:=//div[@id='pt1:pt_gPbl']").Exist Then 
Reporter.ReportEvent micPass ,"Login Functionality","LoginPenfax5Test Pass"
Else
Reporter.ReportEvent micFail ,"Login Functionality" ,"LoginPenfax5Test Failed"
End If

'Call CaptureAUTScreenShot

Dim Obj
Set Obj = browser("name:=Penfax 5").Page("title:=Penfax 5")

datatable.AddSheet("Flight")
datatable.ImportSheet "C:\Users\ssyed\Documents\Unified Functional Testing\Data Sheet\Sheet.xls",1,"Flight"
intSheetRow=Datatable.GetSheet("Flight").GetRowCount
For intTCRow = 1 To intSheetRow
Datatable.GetSheet("Flight").SetCurrentRow(intTCRow)
strStakeholderID = Datatable("StakeholderID","Flight")
strDateOfDeath = Datatable("DateOfDeath","Flight")
strEndDate = Datatable("EndDate","Flight")
strEndReason = Datatable("EndReason","Flight")
strEndReason1  = Datatable("EndReason1","Flight")
strMonthstart = Datatable("Monthstart","Flight")
strNewPmtDate = Datatable("NewPmtDate","Flight")
strMemberStatus = Datatable("MemberStatus","Flight")
Next


''Step 1 - Searching for the Stakeholder who is a PEPP Member with Active Status.
Obj.Link("xpath:=//a[text()='People']").Click     'People Tab
Obj.WebElement("xpath:=//td[text()='Member Search']").Click      'Member Search Tab
Obj.WebEdit("xpath:=//h1[text()='Search Parameters']//following::input[1]").Set "271250"        'Stakeholder Id'  "271250" "238237" 
browser("name:=Penfax 5").Sync

'Obj.WebList("xpath:=//label[text()='Member Status']//following::select[1]").Select "Active"   'Member Status
Obj.WebList("xpath:=//label[text()='Member Status']//following::table[2]/tbody[1]/tr[1]/td[1]/span[1]/select[1]").Select "Active"
wait(2)

'Retrieving the Member Status values from Search Parameters
Search_Value = Obj.WebList("xpath:=//select[@class='x2h' and @title='Active']").GetROProperty("value")
Obj.WebElement("xpath:=//span[text()='Search']").Click      'Search Tab
browser("name:=Penfax 5").Sync
wait(2)
Obj.WebElement("xpath:=//span[text()='Stakeholder ID']//following::span[15]").DoubleClick   'Search
wait(2)


''Step 2 - Click on Legal Orders and Under Legal Order click ADD.
Obj.WebElement("xpath:=//span[text()='Legal Orders']").Click 'Legal Orders
browser("name:=Penfax 5").Sync
wait(3)

''Step 2.1 - Click on Membership Periods
Obj.WebButton("xpath:=//a[@aria-label='Expand Membership Periods' and @title='Expand Membership Periods']").Click 'Expand Membership Periods
wait(2)
Obj.WebElement("xpath:=//span[@class='af_column_data-container' and text()='Active']").DoubleClick   ''Selecting the row
browser("name:=Penfax 5").Sync
Obj.WebElement("xpath:=//span[@class='af_column_data-container' and text()='Active']").Highlight     ''Highlighting on the ACTIVE 


'Validate the Member status which is updated to Active under Member Status
'Validaing the Member Status
MemberStatus = Obj.WebElement("xpath:=//span[@class='af_column_data-container' and text()='Active']").GetROProperty("innertext")
If strcomp(Search_Value,MemberStatus)=0 Then
reporter.ReportEvent micpass, "Verify MemberStatus", "The MemberStatus is verified successfully and the values are displayed as "&Search_Value    
else
reporter.ReportEvent micfail, "Verify MemberStatus", "The MemberStatus is not verified successfully and the values are not displayed as "&Search_Value    
End If
wait(2)

''Step 2.1 - Click on Legal Order "ADD" Button
Obj.WebElement("xpath:=//h1[@class='xxc' and text()='Legal Orders']//following::span[1]").Click


''Step 3 - Selecting Values in the Legal Order
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Legal Order']//following::select[1]").Select "Guardian"   'Legal Order Type" Value
Obj.WebElement("xpath:=//a[@class='xi3' and @title='Select Date']//preceding::input[1]").Click
'Obj.WebEdit("xpath:=//a[@class='xi3' and @title='Select Date']//preceding::input[1]").Set strPayDate1
Obj.WebEdit("xpath:=//a[@class='xi3' and @title='Select Date']//preceding::input[1]").Set strNewPmtDate
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Legal Order']//following::select[2]").Select "Majority"   'Selecting "Co-Agent Decision Authority" Value
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Legal Order']//following::select[3]").Select "All"   'Selecting "Co-Agent Signature" Value
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Legal Order']//following::select[4]").Select "Agent(s) Alone"   'Selecting "Communication Directive" Value
Obj.WebElement("xpath:=//span[text()='Save']").Click 'click on save
wait(3)
browser("name:=Penfax 5").Sync



''Step 4 - Under Agents Click "ADD" Button
Obj.WebElement("xpath:=//h1[@class='xxc' and text()='Agents']//following::span[1]").Click
wait(2)
browser("name:=Penfax 5").Sync

''Step 5 - Selecting Values in the Agents
Obj.WebEdit("xpath:=//div[@class='x1h9' and text()='Agent']//following::input[1]").Set "230681"   'Select "Stakeholder Id".
Obj.WebElement("xpath:=//label[text()='Order Type']").Click
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Agent']//following::select[1]").Select "Power of Attorney"   'Select "Order Type".
Obj.WebEdit("xpath:=//div[@class='x1h9' and text()='Agent']//following::input[2]").Set strNewPmtDate   'Select "Start Date".
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Agent']//following::select[2]").Select "Death of Agent"  'Select "Terminating Event".
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Agent']//following::select[3]").Select "Enduring"   'Select "Incapacitation"
Obj.WebList("xpath:=//div[@class='x1h9' and text()='Agent']//following::select[4]").Select "Approved"   'Select "Status"
Obj.WebEdit("xpath:=//div[@class='x1h9' and text()='Agent']//following::input[4]").Set strNewPmtDate   'Select "Status Date".

Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Agent']//following::label[15]").DoubleClick 'Select "Beneficiary Designation".
wait(2)
browser("name:=Penfax 5").Sync
Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Agent']//following::label[15]").DoubleClick   'Contact Information Change".
wait(2)
browser("name:=Penfax 5").Sync
Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Agent']//following::label[17]").DoubleClick   'Select "Payment Instruction Change".
wait(2)
browser("name:=Penfax 5").Sync

Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Agent']//following::span[19]").Click 'click on save
wait(3)
browser("name:=Penfax 5").Sync


''Step 6 -  - Under Agents Click "EDIT" Button
Obj.WebElement("xpath:=//h1[@class='xxc' and text()='Agents']//following::a[2]").Click
wait(2)
browser("name:=Penfax 5").Sync

''Step 6.1 - Edit Values in the Agent
Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Agent']//following::label[15]").DoubleClick   'Select "Indicative Data Change".
wait(2)
browser("name:=Penfax 5").Sync

Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Agent']//following::span[19]").Click 'click on save
wait(3)
browser("name:=Penfax 5").Sync

''Test case completed”


''''''''''''''''''''''''''''''''''''''''''''''''END of Test Case''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

