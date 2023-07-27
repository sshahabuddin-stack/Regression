package LegalModule;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class E14_04_Legal_Order_Remove_Legal_Order {
	
	

	
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
		
		driver.findElement(By.xpath("//span[text()='Legal Orders']")).click();
		
		System.out.println(secondResult.getText());
		
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[@href='#']//span[@class='xfx'][normalize-space()='Delete']")).click();
		driver.findElement(By.xpath("//div[@id='pt1:pt_region2:3:pt1:cb5']//a[@role='button']")).click();
		
		


	}
}
