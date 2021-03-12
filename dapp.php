
<?php
    require 'constants.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styling.css">
    <title>Document</title>
</head>
<body>
    <button id="dropdown">Click me</button>
    <div class="dropdownDetails modal" style="display: none;">
        <h2>Support Details 1</h2>
        <p>This is a program to support someone towards building a project on.......</p>
        <h3>Send Cash to a project</h3>
        <a id="myBtn1" class="initiateTransaction">Contribute</a>
        <h3>Approve a project</h3>
        <a id="myBtn2" class="initiateTransaction">Approve a request</a>
    </div>
    <?php
    if(!isset($_POST['submit'])){
    ?>
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <form style="display:flex; flex-direction: column;" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
                <label>Enter Reason for Contribution</label>
                <input type="text" name="reason" width="300">

                <label>Enter Amount</label>
                <input type="number" name="amount" width="300px">

                <label>Enter Address of the recipient</label>
                <input type="number" name="address" width="300px">

                <input type="submit" value="submit" name="submit" width="150px">
            </form>
        </div>
    </div>

    
    <?php 
        
    }
    else{
        $reason = $_POST['reason'];
        $amount = $_POST['amount'];
        $location = $_POST['address'];
        run_sshCommand($reason,$amount,$location);
    }

    function run_sshCommand($reason,$amount,$location){}
    if(!isset($_POST['submit1'])){
    ?>
    <div id="contribute" class="modal">
        <div class="modal-content"></div>
        <form style="display:flex; flex-direction: column;" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
            <label>Enter Amount</label>
            <input type="number" name="amount" width="300px">
            
            <label>Enter your Address</label>
            <input type="number" name="address" width="300px">

            <input type="submit" value="submit" name="submit1" width="150px">
        </form>
    </div>
    <?php
    }
    else{

        $amount = $_POST['amount'];
        $address = $_POST['address'];
        contribute($amount,$address);
    }
    function contribute($amount,$address){

    }
    if(!isset($_POST['submit2'])){
    ?>
    <div id="approve">
        <div class="modal-content">
            <form style="display:flex; flex-direction: column;" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
                <label>Do you approve the request enter either yes or no</label>
                <input type="text" name="response" width="300px">
                <input type="submit" value="submit" name="submit2" width="150px">
            </form>
        </div>
    </div>

    <?php
    }
    else{
        $response = $_POST['response'];
        if($response =="yes" || $reason =="YES"){
            approveRequest($response);
        }
    }
    function approveRequest($response){}
    ?>
    
    <script>
        var modal = document.getElementById("contribute")
    </script>
</body>

</html>