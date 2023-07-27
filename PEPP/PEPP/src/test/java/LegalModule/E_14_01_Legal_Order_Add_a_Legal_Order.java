package LegalModule;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;




public class E_14_01_Legal_Order_Add_a_Legal_Order {
	
	

	public static void main(String[] args) throws InterruptedException {
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://test1-penfax1.privapp.tortest.oraclevcn.com:7003/Penfax5/login.html");
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(5));
		
		
		driver.findElement(By.name("j_username")).sendKeys("ssyed");
		driver.findElement(By.name("j_password")).sendKeys("Summer!2023");
		driver.findElement(By.name("SignIn")).click();
		
		//"Step 1 - Searching for the Stakeholder who is a PEPP Member with Active Status"
		
		//Thread.sleep(5000);
		WebElement firstResult = new WebDriverWait(driver, Duration.ofSeconds(30))
		        .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[text()='People']")));
		
		driver.findElement(By.xpath("//a[text()='People']")).click();
		driver.findElement(By.xpath("//*[text()='Member Search']")).click();
		//Assert.assertEquals(By.xpath("//*[text()='Member Search']") , "Member Search");
		
		
		
		System.out.println(driver.getTitle()); 
	    System.out.println(firstResult.getText());
	    //Assert.assertTrue(driver.findElement(By.xpath("//*[text()='Member Search']")).isDisplayed());
	    
	    Thread.sleep(3000);
		driver.findElement(By.name("pt1:pt_region1:1:pt1:qryId1:val00")).sendKeys("238541");
		driver.findElement(By.id("pt1:pt_region1:1:pt1:qryId1:_search")).click();
		
		//Thread.sleep(2000);
		
		driver.findElement(By.id("pt1:pt_region1:1:pt1:pc2:dc_pc1:t1:0:ot2a")).click(); //Search for Stakeholder
		
		//---------------------------------------------------------------------------------
		
		// New Window for Legal Order
		WebElement secondResult = new WebDriverWait(driver, Duration.ofSeconds(30))
		        .until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Legal Orders']")));
		
		System.out.println(secondResult.getText());
		
		driver.findElement(By.xpath("//span[text()='Legal Orders']")).click();
		driver.findElement(By.id("pt1:pt_region2:3:pt1:cb2::icon")).click(); //Click on Add Member
		//Thread.sleep(2000);
		driver.findElement(By.id("pt1:pt_region2:3:pt1:soc1")).click(); //Dropdown list
		
		Select select = new Select(driver.findElement(By.id("pt1:pt_region2:3:pt1:soc1::content")));
	//	select.selectByIndex(4); // Power of Attorney
        select.selectByVisibleText("Power of Attorney");  
		// Get all the selected option of the dropdown
		//List<WebElement> selectedOptions = select.getAllSelectedOptions();
		
	       // Pick Calendar
		driver.findElement(By.id("pt1:pt_region2:3:pt1:id1::glyph")).click();
		
		  //Select Date
		driver.findElement(By.cssSelector(".xob.p_AFSelected")).click();  // Select today's date 26-jun-2023
		Select co_agent = new Select(driver.findElement(By.id("pt1:pt_region2:3:pt1:soc8::content")));
		co_agent.selectByVisibleText("Majority");  // Select Majority from dropdown
		         
		       
		 driver.findElement(By.id("pt1:pt_region2:3:pt1:sbc4::content")).click(); // Select the checkbox
		        
		
		 Select co_agent_sig = new Select(driver.findElement(By.id("pt1:pt_region2:3:pt1:soc9::content")));
			co_agent_sig.selectByVisibleText("All");  // Select All from dropdown
			
			Select comm = new Select(driver.findElement(By.id("pt1:pt_region2:3:pt1:soc10::content")));
			comm.selectByVisibleText("Agent(s) Alone");  // Select Agent(s) alone from dropdown
			
			WebElement thirdResult = new WebDriverWait(driver, Duration.ofSeconds(30))
		        .until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Save']")));
		
			driver.findElement(By.xpath("//span[text()='Save']")).click();
		     System.out.println(thirdResult.getText());
		     
	}
		
			
			
			public static void Delete(String[] args) throws InterruptedException {
				
				WebDriver driver = new ChromeDriver();
						
						driver.get("http://test1-penfax1.privapp.tortest.oraclevcn.com:7003/Penfax5/login.html");
						
						driver.manage().window().maximize();
						driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
						driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(5));
						
						
						driver.findElement(By.name("j_username")).sendKeys("ssyed");
						driver.findElement(By.name("j_password")).sendKeys("Winter@2023");
						driver.findElement(By.name("SignIn")).click();
						
						//"Step 1 - Searching for the Stakeholder who is a PEPP Member with Active Status"
						
						//Thread.sleep(5000);
						WebElement firstResult = new WebDriverWait(driver, Duration.ofSeconds(30))
						        .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[text()='People']")));
						
						driver.findElement(By.xpath("//a[text()='People']")).click();
						driver.findElement(By.xpath("//*[text()='Member Search']")).click();
						//Assert.assertEquals(By.xpath("//*[text()='Member Search']") , "Member Search");
						
						
						
						System.out.println(driver.getTitle()); 
					    System.out.println(firstResult.getText());
					    //Assert.assertTrue(driver.findElement(By.xpath("//*[text()='Member Search']")).isDisplayed());
					    
					    Thread.sleep(3000);
						driver.findElement(By.name("pt1:pt_region1:1:pt1:qryId1:val00")).sendKeys("238541");
						driver.findElement(By.id("pt1:pt_region1:1:pt1:qryId1:_search")).click();
						
						//Thread.sleep(2000);
						
						driver.findElement(By.id("pt1:pt_region1:1:pt1:pc2:dc_pc1:t1:0:ot2a")).click(); //Search for Stakeholder
						
						//---------------------------------------------------------------------------------
						
						// New Window for Legal Order
						WebElement secondResult = new WebDriverWait(driver, Duration.ofSeconds(30))
						        .until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Legal Orders']")));
						
						System.out.println(secondResult.getText());
						
						driver.findElement(By.xpath("//span[text()='Legal Orders']")).click();

			
			
	    
	}

}
