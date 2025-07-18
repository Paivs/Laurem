"use client";

import { cn } from "@/lib/utils"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardLevitate({ className, ...props }) {
  return (
    <>
     <Card className={cn("w-[380px] animate-[levitate_13s_ease_infinite_1s_reverse]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardFooter>
      </CardFooter>
    </Card>
    </>
   
  )
}