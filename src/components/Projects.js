import { useState } from "react";

export default function Projects(project) {
    var project=project.project
    console.log(project)
  return (
    <div class="project_card border-2 border-gray-200 flex flex-col gap-5  items-center justify-center bg-white min-h-[18rem] w-[20rem] rounded-lg">
      <img src={require("../assets/"+project.img)} alt="" class=" h-[5rem] w-[5rem] p-4 rounded-lg" />
      <h2 class="font-semibold text-lg text-center">{project.heading}</h2>
      <p class="text-sm mt-2 text-center text-gray-600 px-10 leading-8 ">
        {project.dis}
      </p>
    </div>
  );
}
