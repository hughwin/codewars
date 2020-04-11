import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DeadFish {
    public static int[] parse(String data) {
        int count = 0;

        Pattern pattern = Pattern.compile("o");
        Matcher matcher = pattern.matcher(data);

        int lengthOfArray = 0;

        while (matcher.find()){
            lengthOfArray++;
        }

        int[] outputArray = new int[lengthOfArray];
        int outputArrayIndex = 0;

        int[] array = new int[0];
        for(int i = 0 ; i < data.length() ; i++){
            if(data.charAt(i) == 'i'){
                count++;
            }
            if(data.charAt(i) == 'd'){
                count--;
            }
            if(data.charAt(i) == 's'){
                count = (count * count);
            }
            if (data.charAt(i) == 'o'){
                outputArray[outputArrayIndex] = count;
                outputArrayIndex++;
            }
        }
        for(int in : outputArray){
            System.out.println(in);
        }
        return outputArray;
    }
}