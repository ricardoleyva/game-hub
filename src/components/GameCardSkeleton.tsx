import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="185px" />
      <Card.Body>
        <SkeletonText noOfLines={5} gap="3" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
