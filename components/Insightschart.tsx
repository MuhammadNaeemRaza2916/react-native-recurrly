import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export type ChartPoint = {
  day: string;
  value: number;
  /** Optional tooltip text, defaults to `$${value}` */
  label?: string;
};

type Props = {
  data: ChartPoint[];
  /** Y-axis labels from top to bottom */
  yLabels?: string[];
  initialActiveIndex?: number;
  onSelect?: (index: number, point: ChartPoint) => void;
};

const PLOT_HEIGHT = 181;
const MAX_VALUE = 45;

export const InsightsChart = ({
  data,
  yLabels = ["45", "35", "25", "5", "0"],
  initialActiveIndex = 3,
  onSelect,
}: Props) => {
  const [active, setActive] = useState(initialActiveIndex);

  return (
    <View className="chart-card">
      {/* Y axis */}
      <View className="chart-legend">
        {yLabels.map((label) => (
          <Text key={label} className="chart-legend-text">
            {label}
          </Text>
        ))}
      </View>

      <View className="chart-plot">
        {/* Dashed grid lines */}
        <View className="chart-grid" pointerEvents="none">
          {yLabels.map((label) => (
            <View key={label} className="chart-grid-line">
              <View className="chart-grid-dash" />
            </View>
          ))}
        </View>

        {/* Bars + day labels */}
        <View className="chart-columns">
          {data.map((point, index) => {
            const isActive = index === active;
            const barHeight =
              Math.min(point.value / MAX_VALUE, 1) * PLOT_HEIGHT;

            return (
              <Pressable
                key={point.day}
                className="chart-column"
                onPress={() => {
                  setActive(index);
                  onSelect?.(index, point);
                }}
              >
                <View className="chart-bar-area">
                  {isActive && (
                    <View
                      className="chart-tooltip"
                      style={{ bottom: barHeight + 4 }}
                    >
                      <View className="chart-tooltip-bubble">
                        <Text className="chart-tooltip-text">
                          {point.label ?? `$${point.value}`}
                        </Text>
                      </View>
                      <View className="chart-tooltip-arrow" />
                    </View>
                  )}

                  <View
                    className={`chart-bar ${isActive ? "chart-bar-active" : ""}`}
                    style={{ height: barHeight }}
                  />
                </View>

                <Text className="chart-day">{point.day}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};
