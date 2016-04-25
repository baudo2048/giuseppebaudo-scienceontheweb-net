import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

public class TestLargest extends TestCase {
	
	public TestLargest(String name){
		super(name);
	}
	
	public void testSimple(){
		//assertEquals(9,LargestClass.largest(new int[]{7,9,8}));
	}
	
	public void testOrder(){
		assertEquals(9,LargestClass.largest(new int[]{9,8,7}));
		assertEquals(9,LargestClass.largest(new int[]{8,9,7}));
		assertEquals(9,LargestClass.largest(new int[]{7,8,9}));
	}
	
	public void testEmpty(){
		try {
			LargestClass.largest(new int[]{});
			fail("Should have thrown an exception");
		}catch (RuntimeException e){
			assertTrue(true);
		}
	}
		
	public static Test suite(){
		TestSuite suite = new TestSuite();
		suite.addTest(new TestLargest("testEmpty"));
		
		return suite;
	}
	
	

	

}
