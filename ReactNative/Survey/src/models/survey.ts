type Survey = {
  question: string;
  choices: Choice[];
  totalVote: number;
};

type Choice = {
  title: string;
  count: number;
  voted: boolean;
  percentage: string;
};
