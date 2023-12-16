"use client";
import { StrictModeDroppable } from "@/shared/components/strict-droppable";
import React, { FC, useCallback, useState } from "react";
import {
  DropResult,
  DragDropContext,
  DraggableProvided,
  Draggable,
} from "react-beautiful-dnd";
import AdminSliderService from "./model";
import { IAnimeSlider } from "@/shared/types/slider.types";
import { useQuery } from "@tanstack/react-query";
import { AdminSlide } from "@/shared/components/admin-slide";
import { IAdminSlider } from "./types";

export const AdminSlider: FC<IAdminSlider> = ({ type }) => {
  const [items, setItems] = useState<IAnimeSlider[]>([]);

  const { isLoading } = useQuery({
    queryKey: [type],
    queryFn: async () => {
      if (type === "admin-get-sliders") {
        const sliders = await AdminSliderService.getHomeSliders();
        setItems(sliders);
        return sliders;
      } else if (type === "admin-get-popular") {
        const sliders = await AdminSliderService.getPopular();
        setItems(sliders);
        return sliders;
      } else {
        const sliders = await AdminSliderService.getTop();
        setItems(sliders);
        return sliders;
      }
    },
  });

  const reorder = useCallback(
    (list: IAnimeSlider[], startIndex: number, endIndex: number) => {
      const result = Array.from(list);

      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      AdminSliderService.changeOrder({
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
    []
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
    [setItems, reorder]
  );

  return (
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
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
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
                    <AdminSlide type={type} provided={provided} slide={item} />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
};
