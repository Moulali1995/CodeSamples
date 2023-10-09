import java.util.Objects;

class ObjectsTest {
  
  public static void main(String[] args) {
    String car = "null";
    String car2 = null;
    String car3 = "";
    System.out.println(Objects.nonNull(car));
    System.out.println(Objects.nonNull(car2));
    System.out.println(Objects.nonNull(car3));
  }
}
