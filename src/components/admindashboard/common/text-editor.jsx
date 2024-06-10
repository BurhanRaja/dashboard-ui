import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import Quill from "quill";
import React, {
  useRef,
  useState,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useContext,
} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");

  const { theme } = useContext(ThemeContext);

  return (
    <ReactQuill
      value={editorValue}
      onChange={(value) => setEditorValue(value)}
      className={cn("mt-2", theme == "dark" ? "dark" : "light")}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline"],
        ],
      }}
      //   theme="snow"
    />
  );
};

export default RichTextEditor;
