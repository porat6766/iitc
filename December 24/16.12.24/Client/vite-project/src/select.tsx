import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

import { Room } from "./App";

export default function SelectDemo({
  setRoom,
  room,
}: {
  setRoom: (room: Room) => void;
  room: Room;
}) {
  return (
    <Select value={room} onValueChange={setRoom}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a room" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rooms</SelectLabel>
          <SelectItem className="cursor-pointer" value="General">
            General
          </SelectItem>
          <SelectItem className="cursor-pointer" value="Sports">
            Sports
          </SelectItem>
          <SelectItem className="cursor-pointer" value="Movies">
            Movies
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
