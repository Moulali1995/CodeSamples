import java.lang.*;
import java.util.*;

public class StackClassTest {
  public static void main(String[] args) {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // DO NOT USE ARGUMENTS FOR INPUTS
    // E.g. 'Scanner' for input & 'System.out' for output

    Scanner sc = new Scanner(System.in);
    int t = Integer.parseInt(sc.nextLine());
    for (int i = 0; i < t; i++) {
      String A = sc.nextLine();
      System.out.println(checkBalancedSting(A));

    }
    sc.close();

  }

  public static int checkBalancedSting(String A) {

    Stack<Character> stack = new Stack<>();
    for (int j = 0; j < A.length(); j++) {
      char ele = A.charAt(j);
      if (ele == '(')
        stack.push(ele);
      else {
        if (stack.empty()) {

          return (0);
        } else {
          char popEle = stack.pop();
          if (popEle == ')') {
            return (0);
          }
        }

      }
    }
    if (stack.empty()) {

      return (1);
    } else {

      return (0);
    }
  }
}