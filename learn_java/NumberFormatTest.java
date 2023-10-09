import java.lang.*;
import java.util.*;
import java.text.*;



public class NumberFormatTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        
        // Write your code here.
        NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.getDefault());
        String us = nf.format(payment);
        String india = nf.format(payment);
        System.out.println("US: " + us);
        System.out.println("India: " + india);
        
    }
}