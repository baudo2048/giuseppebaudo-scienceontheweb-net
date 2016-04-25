
import java.util.Iterator;
import java.util.List;

import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Client;

import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

public class MyClient {

	public static void main(String[] args) throws Exception {
		
		System.out.println("CLIENT created!");
		Client client = ClientBuilder.newClient();
		try {
		
			System.out.println("WEB_TARGET created!");			
			//WebTarget webTarget = client.target("http://localhost:8080/ex03_1/services/customers");
			WebTarget webTarget = client.target("http://localhost:8080/myapp/myresource");
			
			System.out.println("INVOCATION.BUILDER created!");			
			Invocation.Builder invocationBuilder = webTarget.request();
			
			System.out.println("RESPONSE created");
			Response response = invocationBuilder.get();
			
			
			System.out.println("Status\n\t"+response.getStatus());

			
			MultivaluedMap<String,String> headers = response.getStringHeaders();
			
			Iterator<String> iterator = headers.keySet().iterator();
			
			while(iterator.hasNext()){
				String key = iterator.next();
				
				List<String> values = headers.get(key);
				
				Iterator<String> valuesIterator = values.iterator();
				
				System.out.println(key);
				while(valuesIterator.hasNext()){
					String value = valuesIterator.next();
					System.out.println("\t"+value);
				}
				
				
			}
			
			System.out.println("response.hasEntity?\n\t"+response.hasEntity());
			
			String entity = response.readEntity(String.class);
			
			System.out.println("Entity\n\t"+entity);
			
			
/*			System.out.println("creating response: ");
			Response response = client.target("http://localhost:8080/ex03_1/services/customers").request().get();
			
			
			
			

			
			System.out.print("response getDate: ");
			System.out.println(response.getDate());
			
			System.out.print("response getLength: ");
			System.out.println(response.getLength());
			
			System.out.print("response getEntity: ");
			System.out.println((response.getEntity()));
			
			System.out.print("response getLocation: ");
			System.out.println(response.getLocation());
			
			System.out.print("response getStatusInfo: ");
			System.out.println(response.getStatusInfo());
			
			
			
			MultivaluedMap<String, Object> headers = response.getHeaders();*/
			
			System.out.println("fine");
			
			
			
			
			

		} finally {
			client.close();
		}
	}
}