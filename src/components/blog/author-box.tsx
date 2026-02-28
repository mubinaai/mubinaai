import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface AuthorBoxProps {
  author: string;
  bio?: string;
}

export function AuthorBox({ author, bio = "Software engineer and AI practitioner writing about practical machine learning and modern IT architecture." }: AuthorBoxProps) {
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar><AvatarFallback>{initials}</AvatarFallback></Avatar>
          <div className="space-y-1">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
