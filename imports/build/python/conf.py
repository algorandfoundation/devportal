# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os

copyright = "2024, Algorand Foundation"
author = "Algorand Foundation"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "autodoc2",
    "myst_parser",
    "sphinx.ext.intersphinx",
    "sphinx_starlight_builder",
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

repo = os.getenv("SPHINX_REPO")
if repo == "puya":
    project = "Algorand Python"
    autodoc2_packages = [
        {
            "path": "../../repos/puya/docs/algopy-stubs",
            "module": "algopy",
            "auto_mode": True,
        },
    ]
    autodoc2_module_all_regexes = [r"algopy.*"]
elif repo == "utils":
    project = "Algokit Utils"
    autodoc2_packages = [
        {
            "path": "../../repos/py-algorand-sdk/algosdk",
            "module": "algosdk",
            "auto_mode": True,
        },
        {
            "path": "../../repos/algokit-utils-py/src/algokit_utils",
            "module": "algokit_utils",
            "auto_mode": True,
        },
    ]
    
else:
    raise ValueError(
        f"Invalid repo: {repo}. Make sure to set the SPHINX_REPO environment variable."
    )


autodoc2_docstring_parser_regexes = [
    # this will render all docstrings as Markdown
    (r".*", "myst"),
]
autodoc2_hidden_objects = [
    "private",  # single-underscore methods, e.g. _private
    "undoc",
]
autodoc2_hidden_regexes = [
    r".*\.__subclasshook__",  # inherited from Protocol
]
autodoc2_render_plugin = "myst"
autodoc2_sort_names = True
autodoc2_index_template = None
autodoc2_docstrings = "all"
markdown_anchor_sections = True
markdown_anchor_signatures = True
autodoc2_class_inheritance = False
