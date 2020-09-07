import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Radio, createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4f8a8b",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff",
      contrastText: "#fff"
    },
    success: {
      main: "#4f8a8b",
      contrastText: "#fff"
    }
  },
  typography: {
    button: {
      textTransform: "capitalize"
    }
  },
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: "#4f8a8b"
      }
    }
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#c26565"
    },
    secondary: {
      main: "#fff"
    },
    success: {
      main: "#c26565",
      contrastText: "#fff"
    }
  },
  typography: {
    button: {
      textTransform: "capitalize"
    }
  },
  overrides: {
    MuiCard: {
      root: {
        border: "2px solid #000"
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: "#c26565"
      }
    }
  }
});

const Theme: React.FC = () => {
  const { theme, setTheme } = useContext(AppContext);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
    localStorage.theme = JSON.stringify(event.target.value);
  };

  return (
    <div className="mr-3">
      <Radio value="dark" checked={theme === "dark"} onChange={handleThemeChange} />
      <Radio value="light" checked={theme === "light"} onChange={handleThemeChange} />
    </div>
  );
};

export { Theme, lightTheme, darkTheme };