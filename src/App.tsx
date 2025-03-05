import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <>
      <div className="max-w-sm mx-auto">
        <div className="p-8">
          <h1 className="text-4xl font-bold m-auto">Snubify</h1>
          <p className="text-gray-500 text-sm">
            The reliable tool that helps you seamlessly listen to unavailable tracks on
            Spotify — on Spotify.
          </p>
        </div>
        <Separator />
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Select a song</CardTitle>
            <CardDescription>
              We will find the song online and then upload it to your Spotify
              local files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Song Name</Label>
                  <Input id="name" placeholder="e.g. 'Songs For Women by Frank Ocean'" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Search</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
