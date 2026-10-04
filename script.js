import { addUserToJson } from "./script_api.js";

let data_Values = document.getElementById("data");

console.log(data_Values);

if (data_Values)
{
    data_Values.addEventListener("submit", async (e) => {
        
        e.preventDefault();

        let course = document.getElementById("course").value;
        let topic = document.getElementById("topic").value;
        let video_link = document.getElementById("video_link").value;
        let video_topic = document.getElementById("video_topic").value;
        let description = document.getElementById("description").value;

        let data = {
            course: course,
            topic: topic,
            video_link: video_link,
            video_topic: video_topic,
            description: description
        };

        let res = await addUserToJson(data);
        console.log(res);

        alert("Data Saved");
    })
}