import java.io.ByteArrayInputStream;
import java.io.InputStream;

public class DataTypeTest {
  public static void main(String[] args) {
    String string = "howtodoinjava.com";

    InputStream instream = new ByteArrayInputStream(string.getBytes());
    System.out.println(instream);

  }
}