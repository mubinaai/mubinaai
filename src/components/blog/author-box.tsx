import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AuthorBox({ author }: { author: string }) {
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <Avatar><AvatarFallback>{initials}</AvatarFallback></Avatar>
        <div className="space-y-1">
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">Software engineer and AI practitioner writing about practical machine learning and IT architecture.</p>
        </div>
      </div>
    </div>
  );
}
