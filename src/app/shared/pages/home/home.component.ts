import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  prompts: string[] = [
    'Explore the ethical implications of artificial intelligence in healthcare.',
    'Write a dialogue between two characters discussing the future of renewable energy.',
    'Imagine a world where time travel is possible. Describe the consequences and challenges it would bring.',
    'Discuss the impact of social media on politics and democracy.',
    "Create a short story set in a dystopian society where technology controls every aspect of people's lives.",
    'Explain the concept of quantum computing to a non-technical audience.',
    'Write a persuasive essay arguing for or against the use of genetically modified organisms (GMOs) in agriculture.',
    'Imagine you are a scientist who has discovered a cure for aging. Write a journal entry describing the implications of this breakthrough.',
    'Discuss the potential benefits and drawbacks of widespread automation in the workforce.',
    'Craft a poem inspired by the beauty and mysteries of the universe.',
    'Write a fictional news article about the first successful colonization of Mars by humans.',
  ];
}
