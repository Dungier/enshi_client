"use client";

import { StrictModeDroppable } from "@/shared/components/strict-droppable";
import React, { FC, useCallback, useEffect, useState } from "react";
import { DropResult, DragDropContext, Draggable } from "react-beautiful-dnd";
import { IAnimeSlider } from "@/shared/types/slider.types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AdminSlide } from "@/shared/components/admin-slide";
import { IAdminSlider } from "./types";
import { getHomeSliders } from "./model/get-slider";
import { getPopular } from "./model/get-popular";
import { changeOrder } from "./model/change-order";
import { getTop } from "./model/get-top";

export const AdminSlider: FC<IAdminSlider> = ({ type }) => {
  const [items, setItems] = useState<any[]>([]);

  const functionMapping = {
    "admin-get-popular": getPopular,
    "admin-get-top": getTop,
    "admin-get-sliders": getHomeSliders,
  };

  const queryFn = functionMapping[type];

  const { data, isLoading } = useQuery({
    queryKey: [type],
    queryFn: async () => await queryFn(),
    retry: true,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setItems(data);
    }
  }, [isLoading, data]);

  const reorder = useCallback(
    (list: IAnimeSlider[], startIndex: number, endIndex: number) => {
      const result = Array.from(list);

      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      changeOrder({
        type:
          type === "admin-get-popular"
            ? "popular"
            : type === "admin-get-sliders"
              ? "slider"
              : "top",
        updateList: result.map((item, index) => ({
          anime_id: item.anime_id,
          slider_id: item.id,
          order: index,
        })),
      });

      return result;
    },
    [items, type]
  );

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      if (result.source.index === result.destination.index) {
        return;
      }

      setItems((items) => {
        const updatedItems = reorder(
          items,
          result.source.index,
          result.destination!.index
        );

        return updatedItems;
      });
    },
    [setItems, reorder, type]
  );

  return (
    !isLoading &&
    data && (
      <div style={{ overflow: "auto" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable
            droppableId="droppable"
            mode="virtual"
            direction="horizontal"
            renderClone={(provided, snapshot, rubric) => (
              <AdminSlide
                type={type}
                provided={provided}
                slide={items[rubric.source.index]}
              />
            )}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  display: "flex",
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 8,
                  minHeight: 400,
                }}
              >
                {items.map((item, index) => (
                  <Draggable
                    key={item.anime_id}
                    draggableId={`id:${item.anime_id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <AdminSlide
                        type={type}
                        provided={provided}
                        slide={item}
                      />
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>
    )
  );
};
