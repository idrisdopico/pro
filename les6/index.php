<?php 

$imgURLs = new ImgURLs(
    ImgURLs(
        "region" => "valore",
        "price" => "valore2"
    ),
    ImgURLs(
        "region" => "valore",
        "price" => "valore2"
    ),
    ImgURLs(
        "region" => "valore",
        "price" => "valore2"
    )
);

echo json_encode($imgURLs);


?>