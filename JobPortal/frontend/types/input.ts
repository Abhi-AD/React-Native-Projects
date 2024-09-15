import React from "react";

export interface SearchBarProps {
  placeholder: string;
  Icon: React.ComponentType<{ width: string; height: string; color: string }>;
}

export interface TextInputProps {
  placeholder: string;
  label: string;
  containerStyles?: string;
}

export interface JobListProps {
  title: string;
  company: string;
  location: string;
  isNew: boolean;
}
