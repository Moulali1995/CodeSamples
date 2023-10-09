import java.lang.*;
import java.util.*;

public class ArrayTwoDimensional {
  public static void main(String[] args) {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // DO NOT USE ARGUMENTS FOR INPUTS
    // E.g. 'Scanner' for input & 'System.out' for output
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt();
    int m = scanner.nextInt();
    int[][] A = new int[n][m];

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        A[i][j] = scanner.nextInt();
      }
    }
    scanner.close();

    for (int i = 0; i < m; i++) {
      int sum = 0;

      for (int j = 0; j < n; j++) {
        sum += A[j][i];
      }
      System.out.print(sum);
    }

  }

  // public static void main(String args[]) {

  // System.out.print("Enter 2D array size : ");
  // Scanner sc = new Scanner(System.in);
  // int rows = sc.nextInt();
  // int columns = sc.nextInt();

  // System.out.println("Enter array elements : ");

  // int twoD[][] = new int[rows][columns];

  // for (int i = 0; i < rows; i++) {
  // for (int j = 0; j < columns; j++) {
  // twoD[i][j] = sc.nextInt();
  // }
  // }
  // System.out.print("\nData you entered : \n");
  // for (int[] x : twoD) {
  // for (int y : x) {
  // System.out.print(y + " ");
  // }
  // System.out.println();
  // }

  // }
}