import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject

import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile

import internal.GlobalVariable as GlobalVariable

import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.annotation.BeforeTestSuite
import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.annotation.AfterTestSuite
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.context.TestSuiteContext

class Amazon_Authorization {
	/**
	 * Executes before every test case starts.
	 * @param testCaseContext related information of the executed test case.
	 */
	@BeforeTestCase
	def sampleBeforeTestCase() {
		WebUI.setText(findTestObject('Object Repository/Amazon_Authetication_OR/Page_Amazon Sign-In/input_email'), 'tejach312@gmail.com')
		
		WebUI.click(findTestObject('Object Repository/Amazon_Authetication_OR/Page_Amazon Sign-In/inputcontinue'))
		
		WebUI.setEncryptedText(findTestObject('Object Repository/Amazon_Authetication_OR/Page_Amazon Sign-In/input_password'), 'MAPjDJh7XRfzOPtg0Z9QNQ==')
		
		WebUI.click(findTestObject('Object Repository/Amazon_Authetication_OR/Page_Amazon Sign-In/inputsignInSubmit'))
		
		//println testCaseContext.getTestCaseId()
		//println testCaseContext.getTestCaseVariables()
	}

	/**
	 * Executes after every test case ends.
	 * @param testCaseContext related information of the executed test case.
	 */
	@AfterTestCase
	def sampleAfterTestCase() {
		WebUI.click(findTestObject('Object Repository/Amazon_Authentication_OR/Page_Amazon.com LANBRELLA Compact Reverse F_b8d076/input_submit.add-to-registry.wishlist'))
		
		WebUI.closeBrowser()
		
	}

	/**
	 * Executes before every test suite starts.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	/*@BeforeTestSuite
	def sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {
		println testSuiteContext.getTestSuiteId()
	}

	/**
	 * Executes after every test suite ends.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	//@AfterTestSuite
	//def sampleAfterTestSuite(TestSuiteContext testSuiteContext) {
		//println testSuiteContext.getTestSuiteId()
	//}
}