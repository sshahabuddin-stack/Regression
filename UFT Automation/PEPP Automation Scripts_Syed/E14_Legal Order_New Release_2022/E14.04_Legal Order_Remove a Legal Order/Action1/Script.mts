
''**********************************************************************
'FunctionName : Legal Order
'Author : Syed
'Created Date : 05/May/2022
'Purpose : This scripts is to test "Remove/Delete the Legal Order".
'Prerequisites : Run an SQL query for the Stakeholder who is a PEPP Member with Active Status and Legal Order Exists.
''Please Note: Please run the ADD a Legal Order test case and use the same Stakeholder ID for this Test case
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
datatable.ImportSheet "C:\Users\ssyed\Latest Automation Folder\Unified Functional Testing\Data Sheet\Sheet.xls",1,"Flight"
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
Obj.WebEdit("xpath:=//h1[text()='Search Parameters']//following::input[1]").Set "238237"        'Stakeholder Id'  "271250" 
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


''Step 1 - Searching for the Stakeholder who is a PEPP Member with Active Status.
'Obj.Link("xpath:=//a[text()='People']").Click     'People Tab
'Obj.WebElement("xpath:=//td[text()='Member Search']").Click      'Member Search Tab
'wait(2)
'Obj.WebList("xpath:=//label[text()='Plan']//following::select[1]").Select "PEPP"   'plan
'wait(2)
'Obj.WebList("xpath:=//label[text()='Member Type']//following::select[1]").Select "Employee"   'Member Type
'wait(2)
'Obj.WebList("xpath:=//label[text()='Member Status']//following::select[1]").Select "Active"   'Member Status
'wait(2)
''Retrieving the Member Status values from Search Parameters
'Search_Value = Obj.WebList("xpath:=//select[@class='x2h' and @title='Active']").GetROProperty("value")
'
'Obj.WebList("xpath:=//label[text()='Gender']//following::select[1]").Select "Male"   'Gender
'browser("name:=Penfax 5").Sync
'Obj.WebElement("xpath:=//span[text()='Search']").Click      'Search Tab
'browser("name:=Penfax 5").Sync
'wait(2)
'Obj.WebElement("xpath:=//span[text()='Stakeholder ID']//following::span[15]").DoubleClick   'Search
'wait(2)


''Step 2 - Click on Legal Orders and Under Legal Order click ADD.
'Obj.WebElement("xpath:=//span[text()='Legal Order']").Click 'Legal Order
Obj.WebElement("xpath:=//span[text()='Legal Orders']").Click 'Legal Order
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

''Step 2.2 - Delete the Legal Order.
Obj.WebElement("xpath:=//h1[@class='xxc' and text()='Legal Orders']//following::span[3]").Click 'Deleting the Legal Order
Obj.WebElement("xpath:=//div[@class='x1h9' and text()='Are you sure you want to delete?']//following::span[4]").Click  'Clcik on YES'.

''Test case completed....Signoff from Application
'Obj.WebElement("xpath:=//span[text()='Sign Out']").Click
'browser("CreationTime:= 0").CloseAllTabs
'SystemUtil.CloseProcessByName "chrome.exe"
'SystemUtil.CloseProcessByName "iexplore.exe"
'SystemUtil.CloseProcessByName "Firefox.exe"


'Call CopyImagesToWord("C:\UFT_WorkSpace\Test Results\MercuryTestResults.doc") 'Inserting images to word document
'
'Set objBrowser = Nothing

''''''''''''''''''''''''''''''''''''''''''''''''END of Test Case''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

